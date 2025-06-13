/**
 * Example file demonstrating TypeScript best practices
 */

// Interface definitions
interface User {
    id: number;
    name: string;
    email: string;
    role: UserRole;
}

// Enum example
enum UserRole {
    Admin = 'ADMIN',
    User = 'USER',
    Guest = 'GUEST'
}

// Constants
const MAX_LOGIN_ATTEMPTS = 3;
const DEFAULT_TIMEOUT_MS = 5000;

/**
 * Validates user data against schema
 * @param {User} user - User data to validate
 * @returns {Promise<boolean>} True if user data is valid
 * @throws {ValidationError} If validation fails
 */
async function validateUser(user: User): Promise<boolean> {
    // Implementation
    return true;
}

/**
 * Generic function example
 * @param {T[]} items - Array of items to process
 * @param {(item: T) => boolean} predicate - Filter condition
 * @returns {T[]} Filtered array
 */
function filterItems<T>(items: T[], predicate: (item: T) => boolean): T[] {
    return items.filter(predicate);
}

// Class example
class UserService {
    private users: Map<number, User>;

    constructor() {
        this.users = new Map();
    }

    /**
     * Gets user by ID
     * @param {number} id - User ID
     * @returns {Promise<User>} User data
     * @throws {NotFoundError} If user doesn't exist
     */
    public async getUser(id: number): Promise<User> {
        const user = this.users.get(id);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }
}

// Type alias example
type UserResponse = {
    data: User;
    metadata: {
        lastLogin: Date;
        loginAttempts: number;
    };
}; 