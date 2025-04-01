package Composicao;

public class ContaBancaria {
    private String numConta;
    private double saldo;

    public ContaBancaria(String numConta){
        this.numConta = numConta;
        this.saldo = 0;
    }

    public String getNumConta(){
        return numConta;
    }

    public double getSaldo(){
        return saldo;
    }

    public void setNumConta(String numConta){
        this.numConta = numConta;
    }

    public void setSaldo (double saldo){
        this.saldo = saldo;   
    }

    @Override
    public String toString(){
        return "Número da Conta: " + numConta + "Saldo: " + saldo;
    }
}
