class Zadanie:
    def __init__(self):
        self.spol = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "ł", "m", "n", "ń", "p", "r", "s", "ś", "t", "w", "z"];
        self.haslo = input("Podaj hasełko byczq ");

    def show(self):
        print(self.haslo);

    def szyfring(self):
        pierwsza = '';
        tak = [];
        for i in range(0, len(self.haslo)):
            for j in range(0, len(self.spol)):
                if self.haslo[i] == self.spol[j]:
                    pierwsza = self.haslo[i];
                    tak.append(pierwsza);
        nie = tak[:];
        # for i in range(0, len(nie)):
        ostatnia = nie[-1];
        it = len(nie)-1;
        while it >= 0:
            nie[it] = nie[it - 1];
            it -= 1;
        nie[0] = ostatnia;
        wait = 0;
        zmien = "";
        for i in range(0, len(self.haslo)):
            if self.haslo[i] == tak[wait]:
                zmien += nie[wait];
                wait += 1;
                if wait >= len(tak):
                    wait -= 1;
            else:
                zmien += self.haslo[i];
        self.haslo = zmien;

    def deszyfring(self):
        pierwsza = '';
        tak = [];
        for i in range(0, len(self.haslo)):
            for j in range(0, len(self.spol)):
                if self.haslo[i] == self.spol[j]:
                    pierwsza = self.haslo[i];
                    tak.append(pierwsza);
        nie = tak[:];
        # for i in range(0, len(nie)):
        ostatnia = nie[0];
        it = 0;
        while it < len(nie)-1:
            nie[it] = nie[it + 1];
            it += 1;
        nie[-1] = ostatnia;
        wait = 0;
        zmien = "";
        for i in range(0, len(self.haslo)):
            if self.haslo[i] == tak[wait]:
                zmien += nie[wait];
                wait += 1;
                if wait >= len(tak):
                    wait -= 1;
            else:
                zmien += self.haslo[i];
        self.haslo = zmien;


a = Zadanie();
a.show();
a.szyfring();
a.show();
a.deszyfring();
a.show();
a.deszyfring();
a.show();

