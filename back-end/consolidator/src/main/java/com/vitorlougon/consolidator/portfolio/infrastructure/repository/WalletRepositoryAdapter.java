package com.vitorlougon.consolidator.portfolio.infrastructure.repository;

import com.vitorlougon.consolidator.portfolio.domain.model.Wallet;
import com.vitorlougon.consolidator.portfolio.domain.repository.WalletRepository;
import com.vitorlougon.consolidator.portfolio.infrastructure.mapper.WalletInfraMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class WalletRepositoryAdapter implements WalletRepository {
    private final WalletJpaRepository walletJpaRepository;

    public WalletRepositoryAdapter(WalletJpaRepository jpaRepository) {
        this.walletJpaRepository = jpaRepository;
    }

    @Override
    public List<Wallet> listAll() {
        return walletJpaRepository.findAll().stream().map(WalletInfraMapper::toDomain).toList();
    }
}