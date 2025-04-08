

public class Moto extends Veiculo {
    private double capBagageiro;

    public Moto(Sting placa, String motor, String modelo, double capTanque, int ano, double capBagageiro){
        
        super(modelo, motor, modelo, ano, capTanque);
        this.capBagageiro = capBagageiro;
    }
    // fazer getter setter de capBagageiro

    @Override
    public double calcularConsumo(double km){
        return km/30.0;
    }
}
