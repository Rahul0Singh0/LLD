class User {
    private id: number;
    private name: string;
    private phone: string;

    bookRide(): void {}
}

class Driver {
    private id: number;
    private name: string;
    private available: boolean;

    isAvailable(): boolean {
        return true;
    }

    acceptRide(): void {}
}

enum RideStatus {
    REQUESTED,
    ACCEPTED,
    STARTED,
    COMPLETED,
    CANCELLED
}

class Ride {
    private rideId: number;
    private user: User;
    private driver: Driver;
    private status: RideStatus;

    startRide(): void {}

    completeRide(): void {}
}

abstract class MatchingStrategy {
    abstract findDriver(): Driver;
}

class NearestDriverStrategy extends MatchingStrategy {
    findDriver(): Driver {
        throw new Error("Not implemented");
    }
}

class RideManager {
    private strategy: MatchingStrategy;

    createRide(user: User): Ride {
        throw new Error("Not implemented");
    }
}