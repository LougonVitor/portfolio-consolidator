package com.vitorlougon.consolidator.portfolio.application.service;

import com.vitorlougon.consolidator.portfolio.application.dto.WalletApplicationResponse;
import com.vitorlougon.consolidator.portfolio.application.mapper.WalletApplicationMapper;
import com.vitorlougon.consolidator.portfolio.domain.repository.WalletRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WalletQueryService {
    private final WalletRepository walletRepository;

    public WalletQueryService(WalletRepository repository) {
        this.walletRepository = repository;
    }

    public List<WalletApplicationResponse> listAll() {
        return walletRepository.listAll().stream().map(WalletApplicationMapper::toResponse).toList();
    }
}