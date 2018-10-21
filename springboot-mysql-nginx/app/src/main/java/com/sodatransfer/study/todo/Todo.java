package com.sodatransfer.study.todo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Column;

@Entity
public class Todo {
	@Id
	@GeneratedValue
	private Long id;

	private String name;

	private String description;

  @Column(columnDefinition = "TINYINT(1)")
  private Boolean done;

	public Todo() {
		super();
	}

	public Todo(Long id, String name, String description, Boolean done) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.done = done;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Boolean isDone() {
		return done;
	}
	public void setDone(Boolean done) {
		this.done = done;
	}

}
