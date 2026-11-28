package com.vitorlougon.consolidator.portfolio.api.controller;

import com.vitorlougon.consolidator.portfolio.api.dto.WalletResponse;
import com.vitorlougon.consolidator.portfolio.api.mapper.WalletApiMapper;
import com.vitorlougon.consolidator.portfolio.application.service.WalletQueryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/wallets")
public class WalletController {
    private final WalletQueryService walletQueryService;

    public WalletController(WalletQueryService service) {
        this.walletQueryService = service;
    }

    @GetMapping
    public ResponseEntity<List<WalletResponse>> listAll() {
        List<WalletResponse> response = walletQueryService.listAll().stream().map(WalletApiMapper::toResponse).toList();

        return ResponseEntity.ok(response);
    }
}