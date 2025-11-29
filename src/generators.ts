/**
 * @file generators.ts
 * @description Test data generators for KRA-Connect testing
 * @module @kra-connect/test-utils
 */

/**
 * Generate a valid KRA PIN number
 * Format: P + 9 digits + letter (e.g., P051234567A)
 *
 * @param seed - Optional seed for deterministic generation
 * @returns Valid PIN string
 *
 * @example
 * ```typescript
 * const pin = generatePIN();
 * // Returns: "P051234567A"
 *
 * const deterministicPin = generatePIN(12345);
 * // Always returns same PIN for same seed
 * ```
 */
export function generatePIN(seed?: number): string {
  const random = seed !== undefined ? seededRandom(seed) : Math.random;

  // Generate 9 random digits
  const digits = Math.floor(random() * 900000000 + 100000000).toString();

  // Generate random letter A-Z
  const letterCode = Math.floor(random() * 26) + 65;
  const letter = String.fromCharCode(letterCode);

  return `P${digits}${letter}`;
}

/**
 * Generate multiple valid PIN numbers
 *
 * @param count - Number of PINs to generate
 * @param unique - Ensure all PINs are unique (default: true)
 * @returns Array of valid PIN strings
 *
 * @example
 * ```typescript
 * const pins = generatePINs(5);
 * // Returns: ["P051234567A", "P051234567B", ...]
 * ```
 */
export function generatePINs(count: number, unique: boolean = true): string[] {
  if (!unique) {
    return Array.from({ length: count }, () => generatePIN());
  }

  const pins = new Set<string>();
  while (pins.size < count) {
    pins.add(generatePIN());
  }
  return Array.from(pins);
}

/**
 * Generate a valid TCC (Tax Compliance Certificate) number
 * Format: TCC + 6-8 digits
 *
 * @param seed - Optional seed for deterministic generation
 * @returns Valid TCC string
 *
 * @example
 * ```typescript
 * const tcc = generateTCC();
 * // Returns: "TCC123456"
 * ```
 */
export function generateTCC(seed?: number): string {
  const random = seed !== undefined ? seededRandom(seed) : Math.random;

  const digits = Math.floor(random() * 90000000 + 10000000).toString().slice(0, 6);
  return `TCC${digits}`;
}

/**
 * Generate multiple valid TCC numbers
 *
 * @param count - Number of TCCs to generate
 * @param unique - Ensure all TCCs are unique (default: true)
 * @returns Array of valid TCC strings
 */
export function generateTCCs(count: number, unique: boolean = true): string[] {
  if (!unique) {
    return Array.from({ length: count }, () => generateTCC());
  }

  const tccs = new Set<string>();
  while (tccs.size < count) {
    tccs.add(generateTCC());
  }
  return Array.from(tccs);
}

/**
 * Generate a valid e-slip number
 * Format: ESLIP + 9-12 digits
 *
 * @param seed - Optional seed for deterministic generation
 * @returns Valid e-slip string
 *
 * @example
 * ```typescript
 * const eslip = generateEslip();
 * // Returns: "ESLIP123456789"
 * ```
 */
export function generateEslip(seed?: number): string {
  const random = seed !== undefined ? seededRandom(seed) : Math.random;

  const digits = Math.floor(random() * 900000000 + 100000000).toString();
  return `ESLIP${digits}`;
}

/**
 * Generate multiple valid e-slip numbers
 *
 * @param count - Number of e-slips to generate
 * @param unique - Ensure all e-slips are unique (default: true)
 * @returns Array of valid e-slip strings
 */
export function generateEslips(count: number, unique: boolean = true): string[] {
  if (!unique) {
    return Array.from({ length: count }, () => generateEslip());
  }

  const eslips = new Set<string>();
  while (eslips.size < count) {
    eslips.add(generateEslip());
  }
  return Array.from(eslips);
}

/**
 * Generate a random taxpayer name
 *
 * @param type - Type of taxpayer ('individual' | 'company' | 'partnership')
 * @param seed - Optional seed for deterministic generation
 * @returns Taxpayer name string
 *
 * @example
 * ```typescript
 * const name = generateTaxpayerName('individual');
 * // Returns: "John Mwangi"
 *
 * const company = generateTaxpayerName('company');
 * // Returns: "Acme Corporation Ltd"
 * ```
 */
export function generateTaxpayerName(
  type: 'individual' | 'company' | 'partnership' = 'company',
  seed?: number
): string {
  const random = seed !== undefined ? seededRandom(seed) : Math.random;

  if (type === 'individual') {
    const firstNames = ['John', 'Jane', 'David', 'Mary', 'Peter', 'Sarah', 'James', 'Alice', 'Michael', 'Grace'];
    const lastNames = ['Mwangi', 'Kamau', 'Ochieng', 'Wanjiku', 'Otieno', 'Njeri', 'Kipchoge', 'Mutua', 'Omondi', 'Wambui'];

    const firstName = firstNames[Math.floor(random() * firstNames.length)];
    const lastName = lastNames[Math.floor(random() * lastNames.length)];

    return `${firstName} ${lastName}`;
  }

  if (type === 'company') {
    const prefixes = ['Acme', 'Kenya', 'East Africa', 'Nairobi', 'Savannah', 'Highland', 'Coastal', 'Rift Valley'];
    const types = ['Corporation', 'Traders', 'Solutions', 'Enterprises', 'Industries', 'Coffee Co', 'Logistics', 'Services'];
    const suffixes = ['Ltd', 'Limited', 'Co', ''];

    const prefix = prefixes[Math.floor(random() * prefixes.length)];
    const typeName = types[Math.floor(random() * types.length)];
    const suffix = suffixes[Math.floor(random() * suffixes.length)];

    return suffix ? `${prefix} ${typeName} ${suffix}` : `${prefix} ${typeName}`;
  }

  // Partnership
  const names = ['Mwangi', 'Kamau', 'Ochieng', 'Kipchoge', 'Mutua'];
  const name1 = names[Math.floor(random() * names.length)];
  const name2 = names[Math.floor(random() * names.length)];

  return `${name1} & ${name2} Partners`;
}

/**
 * Generate an obligation ID
 * Format: OBL + 3 digits
 *
 * @param seed - Optional seed for deterministic generation
 * @returns Obligation ID string
 *
 * @example
 * ```typescript
 * const oblId = generateObligationID();
 * // Returns: "OBL001"
 * ```
 */
export function generateObligationID(seed?: number): string {
  const random = seed !== undefined ? seededRandom(seed) : Math.random;

  const num = Math.floor(random() * 999 + 1).toString().padStart(3, '0');
  return `OBL${num}`;
}

/**
 * Generate a tax period in YYYYMM format
 *
 * @param yearsAgo - How many years in the past (0 = current year)
 * @param month - Specific month (1-12), or random if not provided
 * @returns Tax period string in YYYYMM format
 *
 * @example
 * ```typescript
 * const period = generateTaxPeriod(0, 1);
 * // Returns: "202501" (current year, January)
 *
 * const randomPeriod = generateTaxPeriod(1);
 * // Returns: "202407" (last year, random month)
 * ```
 */
export function generateTaxPeriod(yearsAgo: number = 0, month?: number): string {
  const year = new Date().getFullYear() - yearsAgo;
  const mon = month || Math.floor(Math.random() * 12) + 1;

  return `${year}${mon.toString().padStart(2, '0')}`;
}

/**
 * Generate a valid Kenyan phone number
 * Format: +254XXXXXXXXX
 *
 * @param seed - Optional seed for deterministic generation
 * @returns Phone number string
 *
 * @example
 * ```typescript
 * const phone = generatePhoneNumber();
 * // Returns: "+254712345678"
 * ```
 */
export function generatePhoneNumber(seed?: number): string {
  const random = seed !== undefined ? seededRandom(seed) : Math.random;

  const prefixes = ['7', '1']; // Mobile prefixes in Kenya
  const prefix = prefixes[Math.floor(random() * prefixes.length)];

  const digits = Math.floor(random() * 90000000 + 10000000).toString();

  return `+254${prefix}${digits}`;
}

/**
 * Generate a valid email address
 *
 * @param domain - Email domain (default: 'example.com')
 * @param seed - Optional seed for deterministic generation
 * @returns Email address string
 *
 * @example
 * ```typescript
 * const email = generateEmail();
 * // Returns: "taxpayer123456@example.com"
 * ```
 */
export function generateEmail(domain: string = 'example.com', seed?: number): string {
  const random = seed !== undefined ? seededRandom(seed) : Math.random;

  const username = `taxpayer${Math.floor(random() * 1000000)}`;
  return `${username}@${domain}`;
}

/**
 * Generate a random amount for payments/taxes
 *
 * @param min - Minimum amount
 * @param max - Maximum amount
 * @param decimals - Number of decimal places (default: 2)
 * @param seed - Optional seed for deterministic generation
 * @returns Amount as number
 *
 * @example
 * ```typescript
 * const amount = generateAmount(1000, 100000);
 * // Returns: 45678.90
 * ```
 */
export function generateAmount(
  min: number = 1000,
  max: number = 1000000,
  decimals: number = 2,
  seed?: number
): number {
  const random = seed !== undefined ? seededRandom(seed) : Math.random;

  const amount = random() * (max - min) + min;
  return Number(amount.toFixed(decimals));
}

/**
 * Generate a random date within a range
 *
 * @param daysAgo - How many days in the past to start
 * @param daysFuture - How many days in the future to end
 * @param seed - Optional seed for deterministic generation
 * @returns Date object
 *
 * @example
 * ```typescript
 * const date = generateDate(30, 30);
 * // Returns date between 30 days ago and 30 days from now
 * ```
 */
export function generateDate(
  daysAgo: number = 30,
  daysFuture: number = 0,
  seed?: number
): Date {
  const random = seed !== undefined ? seededRandom(seed) : Math.random;

  const now = Date.now();
  const rangeMs = (daysAgo + daysFuture) * 24 * 60 * 60 * 1000;
  const pastMs = daysAgo * 24 * 60 * 60 * 1000;

  const timestamp = now - pastMs + (random() * rangeMs);
  return new Date(timestamp);
}

/**
 * Format a date as YYYY-MM-DD
 *
 * @param date - Date to format
 * @returns Formatted date string
 *
 * @example
 * ```typescript
 * const formatted = formatDate(new Date());
 * // Returns: "2024-01-15"
 * ```
 */
export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}

/**
 * Seeded random number generator for deterministic testing
 *
 * @param seed - Seed number
 * @returns Random number generator function
 */
function seededRandom(seed: number): () => number {
  let value = seed;

  return function() {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

/**
 * Validate PIN format
 *
 * @param pin - PIN to validate
 * @returns True if valid format
 *
 * @example
 * ```typescript
 * validatePINFormat("P051234567A"); // true
 * validatePINFormat("INVALID"); // false
 * ```
 */
export function validatePINFormat(pin: string): boolean {
  const regex = /^P\d{9}[A-Z]$/;
  return regex.test(pin);
}

/**
 * Validate TCC format
 *
 * @param tcc - TCC to validate
 * @returns True if valid format
 */
export function validateTCCFormat(tcc: string): boolean {
  const regex = /^TCC\d{6,8}$/;
  return regex.test(tcc);
}

/**
 * Validate e-slip format
 *
 * @param eslip - E-slip to validate
 * @returns True if valid format
 */
export function validateEslipFormat(eslip: string): boolean {
  const regex = /^ESLIP\d{9,12}$/;
  return regex.test(eslip);
}
