// Atributo CNPJ String

public class ContaBancariaJuridica extends ContaBancaria {
    private String CNPJ;

    public ContaBancariaJuridica(String titular, String numConta, String agencia, double saldo, String CNPJ){
        super(titular, numConta, agencia, saldo);
        this.CNPJ = CNPJ;
    }

    public ContaBancariaJuridica(){}

    public String getCNPJ(){
        return CNPJ;
    }

    public void setCNPJ(String CNPJ){
        this.CNPJ = CNPJ;
    }
}
