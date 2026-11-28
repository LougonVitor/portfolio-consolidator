package com.vitorlougon.consolidator.portfolio.domain.repository;

import com.vitorlougon.consolidator.portfolio.domain.model.Wallet;

import java.util.List;

public interface WalletRepository {
    List<Wallet> listAll();
}