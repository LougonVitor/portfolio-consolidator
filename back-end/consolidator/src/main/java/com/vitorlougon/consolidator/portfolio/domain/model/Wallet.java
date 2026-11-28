package com.vitorlougon.consolidator.portfolio.domain.model;

import java.util.List;

public class Wallet {
    private Long id;
    private String bank;
    private String name;
    private List<Holding> holdings;

    public Wallet(Long id, String bank, String name) {
        this.id = id;
        this.bank = bank;
        this.name = name;
    }

    public Wallet(String bank, String name) {
        this.bank = bank;
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBank() {
        return bank;
    }

    public void setBank(String bank) {
        this.bank = bank;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Holding> getHoldings() {
        return holdings;
    }

    public void setHoldings(List<Holding> holdings) {
        this.holdings = holdings;
    }
}