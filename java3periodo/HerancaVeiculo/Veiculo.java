package HerancaVeiculo;

public class Veiculo {
    private String marca;
    private String modelo;
    private int ano;

    public Veiculo(){}

    public Veiculo(String marca, String modelo, int ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    public String getMarca(){
        return marca;
    }
    public String getModelo(){
        return modelo;
    }
    public int getAno(){
        return ano;
    }
    
    public void setMarca(String marca){
        this.marca= marca;
    }
    public void setModelo(String modelo){
        this.modelo = modelo;
    }
    public void setAno(int ano){
        this.ano = ano;
    }

    public void informacoes(){
        System.out.println("A marca do veículo é " + marca);
        System.out.println("O modelo do veículo é " + modelo);
        System.out.println("O ano do veículo é " + ano);
    }
}
