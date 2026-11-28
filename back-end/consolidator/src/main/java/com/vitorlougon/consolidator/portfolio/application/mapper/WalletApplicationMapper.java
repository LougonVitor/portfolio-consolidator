package com.vitorlougon.consolidator.portfolio.application.mapper;

import com.vitorlougon.consolidator.portfolio.application.dto.WalletApplicationResponse;
import com.vitorlougon.consolidator.portfolio.domain.model.Wallet;

public class WalletApplicationMapper {
    public static WalletApplicationResponse toResponse(Wallet wallet) {
        return new WalletApplicationResponse(
                wallet.getBank(),
                wallet.getName()
        );
    }
}