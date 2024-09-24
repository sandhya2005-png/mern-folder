@tailwind base;
@tailwind components;
@tailwind utilities;

* {
    margin: 0px;
    padding: 0px;
}

.active {
    border-bottom: 4px solid #8614f0;
}

*::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
}

*::-webkit-scrollbar
{
	width: 6px;
	background-color: #F5F5F5;
}

*::-webkit-scrollbar-thumb
{
	background-color: #8614f0;
}