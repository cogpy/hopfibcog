export interface HopfFibration {
  id: string
  name: string
  totalSpace: number
  baseSpace: number
  fiberSpace: number
  totalPrimes: number[]
  basePrimes: number[]
  fiberPrimes: number[]
  prologConstraint: string
  schemeFunction: string
  goRoutine: string
  description: string
  level: number
}

export const hopfFibrations: HopfFibration[] = [
  {
    id: 's1-s1',
    name: 'Classical Bit',
    totalSpace: 1,
    baseSpace: 1,
    fiberSpace: 0,
    totalPrimes: [1],
    basePrimes: [1],
    fiberPrimes: [0],
    prologConstraint: 'binary(X) :- X = 0 ; X = 1.',
    schemeFunction: '(define (bit-transform x) (if x 1 0))',
    goRoutine: 'func bitTransform(x bool) int { if x { return 1 } else { return 0 } }',
    description: 'Möbius transform - S¹ → S¹ with S⁰ fibers',
    level: 0
  },
  {
    id: 's3-s2',
    name: 'First Order Qubit',
    totalSpace: 3,
    baseSpace: 2,
    fiberSpace: 1,
    totalPrimes: [3],
    basePrimes: [2],
    fiberPrimes: [1],
    prologConstraint: 'qubit(Alpha, Beta) :- complex(Alpha), complex(Beta), norm_squared(Alpha, Beta, 1).',
    schemeFunction: '(define (qubit-rotate theta) (lambda (q) (rotate-sphere q theta)))',
    goRoutine: 'func qubitRotate(q Qubit, theta float64) Qubit { return rotateSphere(q, theta) }',
    description: 'S³ → S² with S¹ fibers - The fundamental Hopf fibration',
    level: 1
  },
  {
    id: 's7-s4',
    name: 'Octonionic',
    totalSpace: 7,
    baseSpace: 4,
    fiberSpace: 3,
    totalPrimes: [7],
    basePrimes: [2, 2],
    fiberPrimes: [3],
    prologConstraint: 'octonion(O) :- vector(O, 8), norm(O, 1), non_associative(O).',
    schemeFunction: '(define (octonion-map o) (project-to-4-sphere o))',
    goRoutine: 'func octonionMap(o Octonion) S4 { return projectTo4Sphere(o) }',
    description: 'S⁷ → S⁴ with S³ fibers - Octonionic fibration',
    level: 2
  },
  {
    id: 's15-s8',
    name: 'Sedenion',
    totalSpace: 15,
    baseSpace: 8,
    fiberSpace: 7,
    totalPrimes: [3, 5],
    basePrimes: [2, 2, 2],
    fiberPrimes: [7],
    prologConstraint: 'sedenion(S) :- vector(S, 16), norm(S, 1), non_alternative(S).',
    schemeFunction: '(define (sedenion-project s) (map-to-8-sphere s))',
    goRoutine: 'func sedenionProject(s Sedenion) S8 { return mapTo8Sphere(s) }',
    description: 'S¹⁵ → S⁸ with S⁷ fibers - Extension beyond classical',
    level: 3
  },
  {
    id: 's19-s12',
    name: 'Prime Expansion',
    totalSpace: 19,
    baseSpace: 12,
    fiberSpace: 7,
    totalPrimes: [19],
    basePrimes: [2, 2, 3],
    fiberPrimes: [7],
    prologConstraint: 'prime_fibration(P) :- prime(P), P > 15, fiber_structure(P, 7).',
    schemeFunction: '(define (prime-fiber p) (factorize-base p 7))',
    goRoutine: 'func primeFiber(p int) Base { return factorizeBase(p, 7) }',
    description: 'S¹⁹ → S¹² with S⁷ fibers - Prime-factorized extension',
    level: 4
  },
  {
    id: 's67-s48',
    name: 'Recursive Level 5',
    totalSpace: 67,
    baseSpace: 48,
    fiberSpace: 19,
    totalPrimes: [67],
    basePrimes: [2, 2, 2, 2, 3],
    fiberPrimes: [19],
    prologConstraint: 'recursive_constraint(L5) :- prev_fiber(19), base_factorization([2,2,2,2,3]).',
    schemeFunction: '(define (recursive-5 x) (compose (prev-fiber 19) (base-factor x)))',
    goRoutine: 'func recursive5(x int) int { return compose(prevFiber(19), baseFactor(x)) }',
    description: 'S⁶⁷ → S⁴⁸ with S¹⁹ fibers - Where fibers become constraints',
    level: 5
  },
  {
    id: 's331-s264',
    name: 'Recursive Level 6',
    totalSpace: 331,
    baseSpace: 264,
    fiberSpace: 67,
    totalPrimes: [331],
    basePrimes: [2, 2, 2, 3, 11],
    fiberPrimes: [67],
    prologConstraint: 'meta_constraint(L6) :- prev_fiber(67), recursive_depth(6).',
    schemeFunction: '(define (recursive-6 x) (nest-transform 6 x))',
    goRoutine: 'func recursive6(x int) int { return nestTransform(6, x) }',
    description: 'S³³¹ → S²⁶⁴ with S⁶⁷ fibers - Deep recursive structure',
    level: 6
  }
]

export function getPrimeFactorization(n: number): number[] {
  if (n <= 1) return [n]
  const factors: number[] = []
  let num = n
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    while (num % i === 0) {
      factors.push(i)
      num = num / i
    }
  }
  
  if (num > 1) {
    factors.push(num)
  }
  
  return factors.length > 0 ? factors : [n]
}

export function formatFibration(fib: HopfFibration): string {
  return `S^${fib.totalSpace} → S^${fib.baseSpace} × S^${fib.fiberSpace}`
}

export interface TrinityMapping {
  paradigm: 'prolog' | 'scheme' | 'golang'
  space: 'total' | 'fiber' | 'base'
  property: 'topical' | 'telical' | 'typical'
  philosophical: 'relevancy' | 'entelechy' | 'causality'
  description: string
}

export const trinityMappings: TrinityMapping[] = [
  {
    paradigm: 'prolog',
    space: 'total',
    property: 'topical',
    philosophical: 'relevancy',
    description: 'Prolog constraints define the total space of logical possibility - what is relevant in the infinite domain of potential truths.'
  },
  {
    paradigm: 'scheme',
    space: 'fiber',
    property: 'telical',
    philosophical: 'entelechy',
    description: 'Scheme functions traverse circular fiber paths - the virtual telos of becoming, goal actualization through functional transformation.'
  },
  {
    paradigm: 'golang',
    space: 'base',
    property: 'typical',
    philosophical: 'causality',
    description: 'Go routines enumerate actual types on the base sphere - concrete causal effects manifested in concurrent execution.'
  }
]
