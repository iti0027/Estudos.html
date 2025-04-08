

public class Carro extends Veiculo {
    private int numPortas;
    private String tipoTeto;

    public Carro (String placa, String motor, String modelo, double capTanque, int ano, int numPortas, String tipoTeto){

        super(placa, motor, modelo, ano, capTanque);
        this.numPortas = numPortas;
        this.tipoTeto = tipoTeto;
    }

  // fazer o getters e setters atributo carro
  @Override
  public double calcularConsumo(double km){
    return km/17;
  }
}

