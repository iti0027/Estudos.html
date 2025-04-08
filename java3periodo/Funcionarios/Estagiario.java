package Funcionarios;

public class Estagiario extends Funcionarios {
    public Estagiario(String nome, double salarioBase){
        super(nome, salarioBase);
    }

    @Override
    public double calcularSalario(){
        System.out.println("O nome do estagiário é " + getNome());
        System.out.println("O salario base do estagiário é " + getSalarioBase());
        return getSalarioBase();
    }
}
