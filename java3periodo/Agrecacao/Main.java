package Agrecacao;

public class Main {
    public static void main (String[] args){
        Carro car = new Carro ("HB20", 2020);
        Motor motor = new Motor ("V8", 4.6);

        car.setMotor(motor);
        System.out.println(motor);
    }
}
