package Funcionarios;

public class Gerente extends Funcionarios {
    private double bonusFixo;

    public Gerente(String nome, double salarioBase, double bonusFixo){
        super(nome, salarioBase);
        this.bonusFixo = bonusFixo;
    }

    public double getBonusFixo(){
        return bonusFixo;
    }

    public void setBonusFixo(double bonusFixo){
        this.bonusFixo = bonusFixo;
    }

    @Override
    public double calcularSalario(){
        System.out.println("O nome do gerente é " + getNome());
        System.out.println("O salário base do gerente é " + getSalarioBase());
        System.out.println("O bonus fixo do gerente é" + bonusFixo);
        return getSalarioBase() + bonusFixo;
    }
}
