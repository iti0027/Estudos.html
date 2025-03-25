public class Veiculo {
    private String placa;
    private String motor;
    private String modelo;
    private int ano;
    private double capTanque;

    public Veiculo(String placa, String motor, String modelo, int ano, double capTanque){
        this.placa = placa;
        this.motor = motor;
        this.modelo = modelo;
        this.ano = ano;
        this.capTanque = capTanque;
    }

    public Veiculo (){}

    // getters e setters
    public String getPlaca(){
        return placa;
    }

    public void setPlaca(String placa){
        this.placa = placa;
    }
    // comportamento original
    public double calcularConsumo(double km){
        return 0;
    }
}