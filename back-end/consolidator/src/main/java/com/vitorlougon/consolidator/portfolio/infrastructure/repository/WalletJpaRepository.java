package com.vitorlougon.consolidator.portfolio.infrastructure.repository;

import com.vitorlougon.consolidator.portfolio.infrastructure.entity.WalletEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface WalletJpaRepository extends JpaRepository<WalletEntity, Long> {
}