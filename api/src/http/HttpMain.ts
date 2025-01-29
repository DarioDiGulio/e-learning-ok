import {Application} from "./Application";
import express from "express";
import {Environment} from "./Environment";

const server = new Application(express(), Environment.getOrThrow("PORT"));
server.start();