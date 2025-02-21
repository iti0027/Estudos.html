public class App {
    public static void main (String[] args) {
        Aluno aluno1 = new Aluno();
        //classe , nome obj = novo obj da classe aluno
        aluno1.nome = "Ítalo";
        System.out.println("Nome do aluno: " + aluno1.nome);
        aluno1.estudar("Programação orientada a objeto");
        aluno1.nome = "Gabriel";
        aluno1.altura = 1.82;
        System.out.println("Nome do aluno: " + aluno1.nome);


    }
}
