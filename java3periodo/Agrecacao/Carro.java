package Agrecacao;

// agracação seria quando dois objetos trabalham juntos, mas não precisam diretamente um do outro para funcionar;

// Composição seria quando um depende do outro para funcionar corretamente.

public class Carro {
    private String modelo;
    private int ano;
    private Motor motor;

    public Carro(String modelo, int ano){
        this.modelo = modelo;
        this.ano = ano;
    }

    public Motor getMotor(){
        return motor;
    }

    public void setMotor(Motor motor){
        this.motor = motor;
    }

    public String getModelo(){
        return modelo;
    }

    public void setModelo(String modelo){
        this.modelo = modelo;
    }

    public int getAno(){
        return ano;
    }

    public void setAno (int ano){
        this.ano = ano;
    }
}
