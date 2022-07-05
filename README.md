##### **Projeto todolist**

### Frontend:

instalar dependencias:

```
npm install
```

alterar url da api na pasta utils caso necessario(url padrão: http://localhost:3000)

e iniciar o projeto:

```
npm start
```

### **backend**:

instalar dependencias:

```
npm install
```

criar banco de dados:

```
CREATE DATABASE `Ebytr`;
CREATE TABLE `Ebytr`.`task` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `task` VARCHAR(200) NOT NULL,
  `status` INT NOT NULL DEFAULT 0,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`));
```

e iniciar o projeto:

```
npm run debug
```
