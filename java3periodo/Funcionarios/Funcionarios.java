package Funcionarios;

public class Funcionarios {
    private String nome;
    private double salarioBase;

    public Funcionarios(){}
    public Funcionarios(String nome, double salarioBase){
        this.nome = nome;
        this.salarioBase = salarioBase;
    }

    public String getNome(){
        return nome;
    }
    public double getSalarioBase(){
        return salarioBase;
    }

    public void setNome(String nome){
        this.nome = nome;
    }
    public void setSalarioBase(double salarioBase){
        this.salarioBase = salarioBase;
    }

    public double calcularSalario(){
        System.out.println("O nome do funcionário é " + nome);
        System.out.println("O salario base é " + salarioBase);
        return salarioBase;
    }

}
