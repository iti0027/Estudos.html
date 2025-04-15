package InterfaceList;

public class Entrega{
    private String rota;
    private double custoIntrega;

    public Entrega(){}

    public Entrega(String rota, double custoIntrega){
        this.rota = rota;
        this.custoIntrega = custoIntrega;
    }

    public String getRota(){
        return rota;
    }

    public double getCustoIntrega(){
        return custoIntrega;
    }

    public void setRota(String rota){
        this.rota = rota;
    }

    public void setCustoIntrega(){
        this.custoIntrega = custoIntrega;
    }

    public abstract String descricaoRota();
    public abstract double calcularFrete(double distancia);

}