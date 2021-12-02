CREATE DATABASE word_beauty;

CREATE TABLE pessoa(
    pes_nome VARCHAR2(40),
    pes_nomeSocial VARCHAR2(40),
    pes_genero VARCHAR(1),
    pes_nascimento DATE,
    pes_cpf VARCHAR2(15) PRIMARY KEY,
);

CREATE TABLE telefone(
    tel_ddd NUMBER(3),
    tel_numero NUMBER(10)
);

CREATE TABLE produto(
    prod_id SERIAL PRIMARY KEY,
    prod_nome VARCHAR2(15),
    prod_descricao VARCHAR2(30),
    prod_preco FLOAT(4,2)
);

CREATE TABLE servico(
    serv_id SERIAL PRIMARY KEY,
    serv_nome VARCHAR2(15),
    serv_descricao VARCHAR2(30),
    serv_preco FLOAT(4,2)
);
