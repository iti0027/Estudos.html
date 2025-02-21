public class Aluno {
    /*Regra geral:
    Atributos
     * Modificador de acesso, tipo de atributo, nome do atriputo.
     */

     public String nome;
     public String sexo;
     public double altura;
     public int idade;

     /*Métodos
      *  Modificador de acesso, função
      */

    public void estudar(String materia){
        System.out.println(nome + " esta estudando a matéria " + materia);
    }
    public void pedirNota(){
        System.out.println("Gabriel esta mendigando nota");
    }
}
