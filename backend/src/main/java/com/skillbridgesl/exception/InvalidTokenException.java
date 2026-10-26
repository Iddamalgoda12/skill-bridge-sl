package com.skillbridgesl.exception;

/** A refresh token was unknown, expired, revoked or reused. */
public class InvalidTokenException extends RuntimeException {
    public InvalidTokenException() {
        super("Invalid or expired token");
    }
}
