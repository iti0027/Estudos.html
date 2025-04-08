package HerancaVeiculo;

public class Main {
    public static void main(String[] args) {
        Veiculo carro = new Carro("HB20", "Ford", 2020, 4);
        Veiculo moto = new MotoCicleta("Sei la", "Não sei", 2018, "Eletrico");

        carro.informacoes();
        moto.informacoes();
    }
}
