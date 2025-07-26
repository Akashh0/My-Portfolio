import './Skills.css'

function Skills() {
  const skills = [
    { name: 'React', icon: 'https://imgs.search.brave.com/_qi9Jp_1YF7ZUvwncJ_cykn8DX5CfkhUps6gSivcszk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTUvUmVh/Y3QtTG9nby1QTkcu/cG5n' },
    { name: 'Vite', icon: 'https://imgs.search.brave.com/HSGDFK_3jKU5zOBypi863n23M6pvs3EPD8HFpOoHzNU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jYW1v/LmdpdGh1YnVzZXJj/b250ZW50LmNvbS8y/MzdlMjBiZTVmY2Zk/OGY3MTMzZjQzZDEy/NmZjNDlmYjI5ZGVj/NzYzMTY3OTkzOGJk/ZDJlY2I4Y2JiMmE2/MTBlLzY4NzQ3NDcw/NzMzYTJmMmY3NjY5/NzQ2NTJlNjQ2NTc2/MmY2YzZmNjc2ZjJl/NzM3NjY3' },
    { name: 'JavaScript', icon: 'https://imgs.search.brave.com/4ODLwWYy7h8EEQzjOzTrpzFiWpNynz27SB73upo1Fag/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDI3LzEy/Ny80NjMvbm9uXzJ4/L2phdmFzY3JpcHQt/bG9nby1qYXZhc2Ny/aXB0LWljb24tdHJh/bnNwYXJlbnQtZnJl/ZS1wbmcucG5n' },
    { name: 'HTML', icon: 'https://imgs.search.brave.com/Fmski0R4221uASlw4wKVhb4DtXpbLe3J785TP7GnHFo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L2h0bWw1LWxvZ28t/cG5nL2h0bWw1LWxv/Z28taHRtbC1sb2dv/LTEwLnBuZw' },
    { name: 'CSS', icon: 'https://imgs.search.brave.com/LKX2k45Ek_cq2MSh0l_PskAkzdylMY-cIj_H_BZpysw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA5/L0NTUy1Mb2dvLTUw/MHgyODEucG5n' },
    { name: 'Django', icon: 'https://imgs.search.brave.com/Kg83ldOl6dtIqobdwHDQbzhtGmPtST3Z0_KRl-Ntym4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9sb2dv/LzE3NTg5NjEucG5n' },
    { name: 'Node.js', icon: 'https://imgs.search.brave.com/8YTKtuH5MSEf709be8D0D62vwCblQuxYvhyYG8LE12I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzI3LzIvbm9kZS1q/cy1sb2dvLXBuZ19z/ZWVrbG9nby0yNzM3/NDkucG5n' },
    { name: 'Blender', icon: 'https://imgs.search.brave.com/rlQAgusNbC9_F0pQNlWA0lDQJUwmBNSYnB0n6QDkK-U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmxlbmRlci5vcmcv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDcvYmxlbmRlcl9j/b21tdW5pdHlfbG9n/b19vcmFuZ2UucG5n' },
    { name: 'SQL', icon: 'https://imgs.search.brave.com/g25Go0D2iqBwkBlvM0pwddYMcz47g67DgFTQtl2pnfw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzUwLzIvc3FsLWxv/Z28tcG5nX3NlZWts/b2dvLTUwNTI0Ny5w/bmc' },
    { name: 'Git', icon: 'https://imgs.search.brave.com/yEddvGx1_yf-Ebi9-ipz8UThJOIpwmycEubz6NksQQ8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/MmE2MzY0YzAzYTg3/MGI5MjBjYmZkNDQu/cG5n' },
    { name: 'Python', icon: 'https://imgs.search.brave.com/D9N4QxdmxerAjmjuTDhc8kr96wAIcH0LyWpYyziu8RQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MmE0YmI5M2ZkZWUx/NWQyOTA1MDA3YmEu/cG5n' },
    { name: 'Machine Learning', icon: 'https://imgs.search.brave.com/OF-u_MDsGv9ftof4SLd02nmpwfMQFik15LtTIhGproU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTUvTWFj/aGluZS1MZWFybmlu/Zy1QTkctQmFja2dy/b3VuZC5wbmc' },
    { name: 'API', icon: 'https://imgs.search.brave.com/QXolskwh9Q6-ohBiq-dBZhn5p52tjCk9B7IYXRUHgxc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4z/ZC5pY29uc2NvdXQu/Y29tLzNkL3ByZW1p/dW0vdGh1bWIvYXBp/LXNldHRpbmctM2Qt/aWNvbi1kb3dubG9h/ZC1pbi1wbmctYmxl/bmQtZmJ4LWdsdGYt/ZmlsZS1mb3JtYXRz/LS1jb25maWd1cmF0/aW9uLWRldmVsb3Bt/ZW50LXByb2dyYW1t/aW5nLXBhY2stc2Np/ZW5jZS10ZWNobm9s/b2d5LWljb25zLTgx/Njc3NTMucG5nP2Y9/d2VicA' },
    { name: 'Php', icon: 'https://imgs.search.brave.com/HZgLZ17pBM5tYsvQ6uOAXgWlziLjaXqcNYwV156-JqQ/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9wZW9w/bGV0aHJ1c3QuY29t/L3VtZXJkdXJnLzIw/MjEvMDUvcGhwLWxv/Z28tMzAweDE1Ni5w/bmc' },
    { name: 'Data Analysis', icon: 'https://imgs.search.brave.com/Mdq5vrDlcqrsMK4deEnvndyFBQoFjGjxVouCPcA05fM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG5p/Lmljb25zY291dC5j/b20vaWxsdXN0cmF0/aW9uL3ByZW1pdW0v/dGh1bWIvZGF0YS1h/bmFseXRpY3MtaWxs/dXN0cmF0aW9uLWRv/d25sb2FkLWluLXN2/Zy1wbmctZ2lmLWZp/bGUtZm9ybWF0cy0t/bG9nby1zdGF0aXN0/aWNzLWFuYWx5c2lz/LXNlby1tYXJrZXRp/bmctcGFjay13ZWIt/aWxsdXN0cmF0aW9u/cy05NjkwMzc5LnBu/Zw' },
  ]

  return (
    <section className="skills-wrapper">
      <div className="skills-section" id="skills">
        <h2 className="skills-title">Bases i'm strong at!</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
