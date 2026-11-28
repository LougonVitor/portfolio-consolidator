package com.vitorlougon.consolidator.portfolio.api.mapper;

import com.vitorlougon.consolidator.portfolio.api.dto.WalletResponse;
import com.vitorlougon.consolidator.portfolio.application.dto.WalletApplicationResponse;

public class WalletApiMapper {
    public static WalletResponse toResponse(WalletApplicationResponse applicationResponse) {
        return new WalletResponse(
                applicationResponse.bank(),
                applicationResponse.name()
        );
    }
}