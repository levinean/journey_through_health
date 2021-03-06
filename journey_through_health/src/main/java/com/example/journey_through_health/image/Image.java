package com.example.journey_through_health.image;

import com.example.journey_through_health.event.Event;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.ToString;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.Instant;

@Entity
@ToString
@Data
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="event_id", nullable=false)
    @JsonIgnore
    private Event event;

    @Lob
    private Byte[] image;

    @CreatedDate
    @Column
    private Instant createdAt;
}
