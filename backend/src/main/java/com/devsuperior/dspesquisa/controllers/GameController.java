package com.devsuperior.dspesquisa.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dspesquisa.DTO.GameDTO;
import com.devsuperior.dspesquisa.services.GameService;

@RestController
@RequestMapping(value = "/games")
public class GameController {

	@Autowired
	private GameService gameService;

	@GetMapping
	public ResponseEntity<List<GameDTO>> findAll() {
		List<GameDTO> list = gameService.findAll();
		return ResponseEntity.ok().body(list);
	}
}
