package com.vitorlougon.consolidator.portfolio.infrastructure.mapper;

import com.vitorlougon.consolidator.portfolio.domain.model.Wallet;
import com.vitorlougon.consolidator.portfolio.infrastructure.entity.WalletEntity;

public class WalletInfraMapper {
    public static Wallet toDomain(WalletEntity entity) {
        return new Wallet(
                entity.getId(),
                entity.getBank(),
                entity.getName()
        );
    }
}