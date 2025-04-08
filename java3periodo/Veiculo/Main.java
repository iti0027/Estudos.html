
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Carro carro1 = new Carro("ABC1", "v12.0", "HB20", 50.4, 2012, 4, "Solar");
        System.out.println("Por favor, digite quantos km você andou: ");
        double km = scanner.nextDouble();
        
        System.out.println("Você consumiu" + getConsumo() + "litros!");
    }
}
