export default () => (
    <div>
    <p>
        <a href="mailto:my@email.com">Contact us!</a>
    </p>
    {/* inline styles */}
    <style jsx>{`
        p {
        font-family: 'Courier New';
        }
        a {
        text-decoration: none;
        color: black;
        }
        a:hover {
        opacity: 0.8;
        }
    `}</style>
    </div>
)