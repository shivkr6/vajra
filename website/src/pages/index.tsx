import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="Vajra" description="Model streaming beyond the disk tax">
      <header style={{padding: '4rem 0', textAlign: 'center', background: '#0a0a0a'}}>
        <h1>⚡ Vajra</h1>
        <p>Bypassing the Disk Tax for Sovereign AI Infrastructure</p>
        <div style={{display: 'flex', justifyContent: 'center', gap: '1rem'}}>
          <a className="button button--primary button--lg" href="/docs/intro">Get Started</a>
          <a className="button button--outline button--secondary button--lg" href="#benchmarks">View Benchmarks</a>
        </div>
      </header>
      
      <main style={{padding: '2rem', maxWidth: '800px', margin: '0 auto'}}>
        <section id="benchmarks">
          <h2>The Performance Gap</h2>
          <p>Benchmarks conducted on Llama-3-8B (~15GB).</p>
          <table style={{width: '100%'}}>
            <thead>
              <tr>
                <th>Orchestrator</th>
                <th>Data Path</th>
                <th>Ready-to-Infer Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>HF (Xet + Rust)</td>
                <td>CDN → Disk → VRAM</td>
                <td>32.04s</td>
              </tr>
              <tr>
                <td><strong>Vajra</strong></td>
                <td><strong>CDN → VRAM Direct</strong></td>
                <td><strong>16.87s</strong></td>
              </tr>
            </tbody>
          </table>
          <p><strong>Throughput:</strong> 7.62 Gbps with 128MB parallel chunks.</p>
        </section>
      </main>
    </Layout>
  );
}
