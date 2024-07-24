package com.poscodx.kanbanboard.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.poscodx.kanbanboard.Repository.KanbanboardRepository;
import com.poscodx.kanbanboard.dto.JsonResult;
import com.poscodx.kanbanboard.vo.TaskVo;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api")
public class ApiController {
	@Autowired
	private KanbanboardRepository kanbanboardRepository;
	
	@GetMapping("/card")
	public ResponseEntity<JsonResult> read() {
		log.info("Request card [GET /api]:");
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(kanbanboardRepository.findAll()));
	}
	
	@GetMapping("/task")
	public ResponseEntity<JsonResult> readTask(@RequestParam(value="no") Long cardNo) {
		log.info("Request task [GET /api]:");
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(kanbanboardRepository.findTaskAll(cardNo)));
	}
	
	@PostMapping("/task")
	public ResponseEntity<JsonResult> insertTask(@RequestBody TaskVo vo) {
		log.info("Request task [POST /api]:");
		kanbanboardRepository.insertTask(vo);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(vo));
	}

	@PutMapping("/task/{CardNo}")
	public ResponseEntity<JsonResult> updateTask(@PathVariable("CardNo") Long CardNo, @RequestBody TaskVo vo) {
		
		log.info("Request task [Update /api]:");
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(vo));
	}
	
	@DeleteMapping("/task/{CardNo}")
	public ResponseEntity<JsonResult> deleteTask(@PathVariable("CardNo") Long CardNo) {
		log.info("Request task [Delete /api]:");
		kanbanboardRepository.deleteTask(CardNo);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(Map.of("CardNo", CardNo)));
	}
}
