package Agrecacao;

public class Motor {
    private String modelo;
    private double cinlindrada;

    public Motor(String modelo, double cinlindrada){
        this.modelo = modelo;
        this.cinlindrada = cinlindrada;
    }

    public String getModelo(){
        return modelo;
    }

    public void setModelo(String modelo){
        this.modelo = modelo;
    }

    public double getCinlindrada(){
        return cinlindrada;
    }

    public void setCinlindrada (double cinlindrada){
        this.cinlindrada = cinlindrada;
    }

    @Override
    public String toString(){
        return "modelo: " + modelo + "Cinlindrada: " + cinlindrada;
    }
}

