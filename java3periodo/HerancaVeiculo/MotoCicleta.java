package HerancaVeiculo;

public class MotoCicleta extends Veiculo{
    private String tipoGuidom;

    public MotoCicleta(){}
    public MotoCicleta(String marca, String modelo, int ano, String tipoGuidom){
        super (marca, modelo, ano);
        this.tipoGuidom = tipoGuidom;
    }

    public String getTipoGuidom(){
        return tipoGuidom;
    }
    
    public void setTipoGuidom(String tipoGuidom){
        this.tipoGuidom = tipoGuidom;
    }

    @Override
    public void informacoes(){
        System.out.println("A marca da moto é " + getMarca());
        System.out.println("O modelo da moto é " + getModelo());
        System.out.println("O ano da moto é " + getAno());
        System.out.println("O tipo de guidom é " + tipoGuidom);
    }
}
