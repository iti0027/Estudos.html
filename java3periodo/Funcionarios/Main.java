package Funcionarios;

public class Main {
    public static void main (String[] args){
        Funcionarios gerente = new Gerente("Victor", 12000, 10 );
        Funcionarios dev = new Desenvolvedor("Ítalo", 2700, 1.5);
        Funcionarios sofredor = new Estagiario("Carlos", 800);

        gerente.calcularSalario();
        dev.calcularSalario();
        sofredor.calcularSalario();
    }
}
