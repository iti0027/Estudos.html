package HerancaVeiculo;

public class Carro extends Veiculo {
    private int numPortas;

    public Carro(){}
    public Carro(String marca, String modelo, int ano, int numPortas){
        super(marca, modelo, ano);
        this.numPortas = numPortas;
    }

    public int getNumPortas(){
        return numPortas;
    }
    public void setNumPortas(int numPortas){
        this.numPortas = numPortas;
    }

    @Override
    public void informacoes(){
        System.out.println("A marca do carro é " + getMarca());
        System.out.println("O modelo do carro é " + getModelo());
        System.out.println("O ano do carro é " + getAno());
        System.out.println("O número de portas do carro é " + numPortas);
        
    }
}

