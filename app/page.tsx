export default function Home() {
  return (
    <main style={{ padding: '4rem', fontFamily: 'sans-serif' }}>
      <h1>User Dashboard</h1>
      <p>Manage your account settings below.</p>

      <div style={{ marginTop: '40px', padding: '20px', border: '1px solid #ccc', maxWidth: '400px' }}>
        <h2>Update Email Address</h2>
                <form action="/api/update-email" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '15px' }}>
            <label htmlFor="email">New Email:</label>
            <input type="email" id="email" name="email" placeholder="new@example.com" required style={{ padding: '8px' }} />
            <button type="submit" style={{ padding: '8px 16px', cursor: 'pointer' }}>Update Email</button>
        </form>
      </div>
    </main>
  );
}