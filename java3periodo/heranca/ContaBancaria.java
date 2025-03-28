/*
 * Atributos
 * ttular String
 * ameroConta String
 * aencia String
 * saldo doubl
 * 
 * metodos
 * exibirInformacoes(): void
 * receberPagamento (valorPago:double):void
 */

 public class ContaBancaria{
    private String titular;
    private String numConta;
    private String agencia;
    private double saldo;

    public ContaBancaria(String titular, String numConta, String agencia, double saldo){
        this.titular = titular;
        this.numConta = numConta;
        this.agencia = agencia;
        this.saldo= saldo;

    }

    public ContaBancaria(){}

    public String getTitular(){
        return titular;
    }

    public void setTitular(String titular){
        this.titular = titular;
    }

    public void exibirInformacoes(){
        System.out.println("Info da Conta");
        System.out.println("Titular: " + titular);
        System.out.println("N° Conta: " + numConta);
        System.out.println("Agência: " + agencia);
    }

    public void receberPagamento(double valorPago) throws Exception{
        if (saldo <= 0 ){
            throw new Exception ();
        }
        saldo += valorPago;
    }

 }