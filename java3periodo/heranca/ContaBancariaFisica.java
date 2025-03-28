// Atributo CPF Stirng

public class ContaBancariaFisica extends ContaBancaria {
    private String CPF;

    public ContaBancariaFisica(){
    }

    public ContaBancariaFisica (String titular, String numConta, String agencia, double saldo, String CPF) {
        super(titular, numConta, agencia, saldo);
        this.CPF = CPF;
    }

    public String getCPF(){
        return CPF;
    }

    public void setCPF(String CPF){
        this.CPF = CPF;
    }
}
