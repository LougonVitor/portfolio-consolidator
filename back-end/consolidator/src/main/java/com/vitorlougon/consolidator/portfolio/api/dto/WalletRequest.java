package com.vitorlougon.consolidator.portfolio.api.dto;

import jakarta.validation.constraints.NotBlank;

public record WalletRequest(
        @NotBlank
        String bank,

        @NotBlank
        String name
) {}