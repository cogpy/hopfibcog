/**
 * Cognitive Architecture: The Genesis of Inference
 * 
 * This module implements the neural-symbolic cognitive architecture
 * based on attentional resonance, spreading activation, and pattern transformation.
 */

// ============================================================================
// Core Types and Interfaces
// ============================================================================

/**
 * Represents a node in the cognitive hypergraph (AtomSpace)
 */
export interface AtomNode {
  id: string
  type: 'concept' | 'predicate' | 'variable' | 'number' | 'pattern'
  name: string
  activation: number // Current activation level (0-1)
  truthValue: TruthValue
  attentionValue: AttentionValue
  metadata?: Record<string, unknown>
}

/**
 * Represents a link between nodes in the hypergraph
 */
export interface AtomLink {
  id: string
  type: 'inheritance' | 'similarity' | 'evaluation' | 'implication' | 'member'
  source: string // Node ID
  target: string // Node ID
  weight: number // Link strength (0-1)
  activation: number
  truthValue: TruthValue
  attentionValue: AttentionValue
}

/**
 * Probabilistic truth value
 */
export interface TruthValue {
  strength: number // Probability (0-1)
  confidence: number // Confidence in the estimate (0-1)
}

/**
 * Economic Attention Allocation (ECAN) values
 */
export interface AttentionValue {
  sti: number // Short-term importance
  lti: number // Long-term importance
  vlti: number // Very long-term importance
}

/**
 * The cognitive hypergraph (AtomSpace)
 */
export interface AtomSpace {
  nodes: Map<string, AtomNode>
  links: Map<string, AtomLink>
  attentionalFocus: Set<string> // IDs of highly activated atoms
}

/**
 * Sensory input that creates the initial potential gradient
 */
export interface SensoryGnomon {
  id: string
  type: 'query' | 'perception' | 'thought'
  content: unknown
  intensity: number
  timestamp: number
}

/**
 * Pattern in the cognitive hypergraph
 */
export interface CognitivePattern {
  id: string
  atoms: string[] // IDs of nodes and links forming the pattern
  activation: number
  coherence: number // How well-formed the pattern is
  salience: number // How relevant to current context
}

/**
 * Result of the inference process
 */
export interface CognitiveGestalt {
  patterns: CognitivePattern[]
  atomSpace: AtomSpace
  primaryPattern?: CognitivePattern
  confidence: number
  timestamp: number
}

// ============================================================================
// Attentional Resonance: The First Mover
// ============================================================================

/**
 * Configuration for attentional resonance
 */
export interface AttentionalResonanceConfig {
  spreadingRate: number // Rate of spreading activation (0-1)
  decayRate: number // Rate of activation decay (0-1)
  focusThreshold: number // Threshold for entering attentional focus
  resonanceAmplification: number // Amplification factor for resonant patterns
  maxIterations: number
}

/**
 * Implements the Attentional Resonance mechanism - the "first mover"
 * This is the fundamental mechanism of selective amplification
 */
export class AttentionalResonance {
  private config: AttentionalResonanceConfig

  constructor(config: Partial<AttentionalResonanceConfig> = {}) {
    this.config = {
      spreadingRate: 0.1,
      decayRate: 0.05,
      focusThreshold: 0.7,
      resonanceAmplification: 1.5,
      maxIterations: 100,
      ...config
    }
  }

  /**
   * Process a sensory input and create the initial potential gradient
   */
  processGnomon(gnomon: SensoryGnomon, atomSpace: AtomSpace): void {
    // Find resonant patterns in the hypergraph
    const resonantNodes = this.findResonantNodes(gnomon, atomSpace)
    
    // Amplify activation of resonant patterns
    for (const nodeId of resonantNodes) {
      const node = atomSpace.nodes.get(nodeId)
      if (node) {
        node.activation = Math.min(1.0, node.activation + gnomon.intensity * this.config.resonanceAmplification)
        node.attentionValue.sti += gnomon.intensity * 100
      }
    }
  }

  /**
   * Find nodes that resonate with the sensory input
   * This is a simplified semantic similarity function
   */
  private findResonantNodes(gnomon: SensoryGnomon, atomSpace: AtomSpace): string[] {
    const resonant: string[] = []
    
    // In a real implementation, this would use semantic embeddings
    // For now, use a simple heuristic based on content matching
    for (const [id, node] of atomSpace.nodes) {
      const similarity = this.computeSemanticSimilarity(gnomon.content, node)
      if (similarity > 0.5) {
        resonant.push(id)
      }
    }
    
    return resonant
  }

  /**
   * Compute semantic similarity (simplified placeholder)
   */
  private computeSemanticSimilarity(content: unknown, node: AtomNode): number {
    // Placeholder: In real implementation, use embeddings
    // For now, return random value to demonstrate the concept
    return Math.random() * 0.3 + (node.activation * 0.7)
  }

  /**
   * Perform spreading activation - the constant exploratory tide
   */
  spreadActivation(atomSpace: AtomSpace): void {
    const activationUpdates = new Map<string, number>()

    // Spread activation along links
    for (const [linkId, link] of atomSpace.links) {
      const sourceNode = atomSpace.nodes.get(link.source)
      const targetNode = atomSpace.nodes.get(link.target)
      
      if (sourceNode && targetNode) {
        // Activation flows from source to target proportional to link weight
        const flow = sourceNode.activation * link.weight * this.config.spreadingRate
        
        const currentUpdate = activationUpdates.get(link.target) || 0
        activationUpdates.set(link.target, currentUpdate + flow)
      }
    }

    // Apply updates and decay
    for (const [nodeId, node] of atomSpace.nodes) {
      const update = activationUpdates.get(nodeId) || 0
      node.activation = Math.max(0, Math.min(1, 
        node.activation * (1 - this.config.decayRate) + update
      ))
      
      // Update attentional focus
      if (node.activation > this.config.focusThreshold) {
        atomSpace.attentionalFocus.add(nodeId)
      } else {
        atomSpace.attentionalFocus.delete(nodeId)
      }
    }
  }

  /**
   * Perform directed attention - focused current on salient patterns
   */
  directAttention(patterns: CognitivePattern[], atomSpace: AtomSpace): void {
    // Sort patterns by salience
    const sortedPatterns = [...patterns].sort((a, b) => b.salience - a.salience)
    
    // Amplify top patterns
    const topPatterns = sortedPatterns.slice(0, 3)
    for (const pattern of topPatterns) {
      for (const atomId of pattern.atoms) {
        const node = atomSpace.nodes.get(atomId)
        if (node) {
          node.activation = Math.min(1.0, 
            node.activation * this.config.resonanceAmplification
          )
          node.attentionValue.sti += 50
        }
      }
    }
  }
}

// ============================================================================
// Pattern Completion and Transformation
// ============================================================================

/**
 * Inference engine for pattern completion and transformation
 */
export class InferenceEngine {
  /**
   * Detect patterns in the atomspace based on current activation
   */
  detectPatterns(atomSpace: AtomSpace): CognitivePattern[] {
    const patterns: CognitivePattern[] = []
    
    // Find highly activated subgraphs
    const focusedAtoms = Array.from(atomSpace.attentionalFocus)
    
    if (focusedAtoms.length > 0) {
      // Create a pattern from the attentional focus
      const pattern: CognitivePattern = {
        id: `pattern-${Date.now()}`,
        atoms: focusedAtoms,
        activation: this.computePatternActivation(focusedAtoms, atomSpace),
        coherence: this.computePatternCoherence(focusedAtoms, atomSpace),
        salience: this.computePatternSalience(focusedAtoms, atomSpace)
      }
      
      patterns.push(pattern)
    }
    
    return patterns
  }

  /**
   * Complete patterns by finding missing connections
   */
  completePattern(pattern: CognitivePattern, atomSpace: AtomSpace): CognitivePattern {
    // Find potential missing links that would increase coherence
    const candidateLinks: string[] = []
    
    for (const atom1 of pattern.atoms) {
      for (const atom2 of pattern.atoms) {
        if (atom1 !== atom2) {
          // Check if direct link exists
          const hasLink = Array.from(atomSpace.links.values()).some(
            link => (link.source === atom1 && link.target === atom2) ||
                   (link.source === atom2 && link.target === atom1)
          )
          
          if (!hasLink) {
            // This could be a missing connection
            // In real implementation, use PLN to infer if link should exist
          }
        }
      }
    }
    
    return {
      ...pattern,
      coherence: this.computePatternCoherence(pattern.atoms, atomSpace)
    }
  }

  /**
   * Transform patterns into more stable configurations
   */
  transformPattern(pattern: CognitivePattern, atomSpace: AtomSpace): CognitivePattern {
    // Apply transformations that reduce cognitive "energy"
    // This is where logical rules and probabilistic inference would be applied
    
    return pattern
  }

  private computePatternActivation(atoms: string[], atomSpace: AtomSpace): number {
    let total = 0
    let count = 0
    
    for (const atomId of atoms) {
      const node = atomSpace.nodes.get(atomId)
      if (node) {
        total += node.activation
        count++
      }
    }
    
    return count > 0 ? total / count : 0
  }

  private computePatternCoherence(atoms: string[], atomSpace: AtomSpace): number {
    // Measure how well-connected the pattern is
    let connectionCount = 0
    const maxConnections = atoms.length * (atoms.length - 1) / 2
    
    for (const [_, link] of atomSpace.links) {
      if (atoms.includes(link.source) && atoms.includes(link.target)) {
        connectionCount++
      }
    }
    
    return maxConnections > 0 ? connectionCount / maxConnections : 0
  }

  private computePatternSalience(atoms: string[], atomSpace: AtomSpace): number {
    // Measure relevance to current context
    let totalSTI = 0
    
    for (const atomId of atoms) {
      const node = atomSpace.nodes.get(atomId)
      if (node) {
        totalSTI += node.attentionValue.sti
      }
    }
    
    return totalSTI / atoms.length
  }
}

// ============================================================================
// The Cognitive System
// ============================================================================

/**
 * Main cognitive system orchestrating the inference process
 */
export class CognitiveSystem {
  private atomSpace: AtomSpace
  private attentionalResonance: AttentionalResonance
  private inferenceEngine: InferenceEngine

  constructor() {
    this.atomSpace = {
      nodes: new Map(),
      links: new Map(),
      attentionalFocus: new Set()
    }
    this.attentionalResonance = new AttentionalResonance()
    this.inferenceEngine = new InferenceEngine()
  }

  /**
   * Process a sensory input and generate a cognitive gestalt
   */
  process(gnomon: SensoryGnomon): CognitiveGestalt {
    // 1. Initial resonance - create potential gradient
    this.attentionalResonance.processGnomon(gnomon, this.atomSpace)
    
    // 2. Spreading activation - exploratory tide
    for (let i = 0; i < 10; i++) {
      this.attentionalResonance.spreadActivation(this.atomSpace)
    }
    
    // 3. Pattern detection
    const patterns = this.inferenceEngine.detectPatterns(this.atomSpace)
    
    // 4. Directed attention - focused current
    this.attentionalResonance.directAttention(patterns, this.atomSpace)
    
    // 5. Pattern completion and transformation
    const transformedPatterns = patterns.map(p => 
      this.inferenceEngine.transformPattern(
        this.inferenceEngine.completePattern(p, this.atomSpace),
        this.atomSpace
      )
    )
    
    // 6. Generate cognitive gestalt
    const primaryPattern = transformedPatterns.length > 0 
      ? transformedPatterns.reduce((a, b) => a.salience > b.salience ? a : b)
      : undefined
    
    return {
      patterns: transformedPatterns,
      atomSpace: this.atomSpace,
      primaryPattern,
      confidence: primaryPattern?.coherence || 0,
      timestamp: Date.now()
    }
  }

  /**
   * Add a node to the atomspace
   */
  addNode(node: AtomNode): void {
    this.atomSpace.nodes.set(node.id, node)
  }

  /**
   * Add a link to the atomspace
   */
  addLink(link: AtomLink): void {
    this.atomSpace.links.set(link.id, link)
  }

  /**
   * Get the current state of the atomspace
   */
  getAtomSpace(): AtomSpace {
    return this.atomSpace
  }

  /**
   * Reset the cognitive system
   */
  reset(): void {
    this.atomSpace.nodes.clear()
    this.atomSpace.links.clear()
    this.atomSpace.attentionalFocus.clear()
  }
}

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Create a default atom node
 */
export function createAtomNode(
  name: string, 
  type: AtomNode['type'] = 'concept'
): AtomNode {
  return {
    id: `node-${name}-${Date.now()}`,
    type,
    name,
    activation: 0.1,
    truthValue: { strength: 0.5, confidence: 0.5 },
    attentionValue: { sti: 0, lti: 0, vlti: 0 }
  }
}

/**
 * Create a default atom link
 */
export function createAtomLink(
  source: string,
  target: string,
  type: AtomLink['type'] = 'similarity',
  weight: number = 0.5
): AtomLink {
  return {
    id: `link-${source}-${target}-${Date.now()}`,
    type,
    source,
    target,
    weight,
    activation: 0.1,
    truthValue: { strength: 0.5, confidence: 0.5 },
    attentionValue: { sti: 0, lti: 0, vlti: 0 }
  }
}
