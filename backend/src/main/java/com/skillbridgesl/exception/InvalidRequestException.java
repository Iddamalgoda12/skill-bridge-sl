package com.skillbridgesl.exception;

/** A request failed a rule that Bean Validation cannot express; maps to HTTP 400 with a field-level code. */
public class InvalidRequestException extends RuntimeException {
    private final String field;
    private final String code;

    public InvalidRequestException(String field, String code) {
        super(field + ": " + code);
        this.field = field;
        this.code = code;
    }

    public String getField() { return field; }
    public String getCode()  { return code; }
}
