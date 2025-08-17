type paginationType = {
    items: number;
    currentPage: number;
    pageSize: number;
    onPageChange: (page: number) => void;
};

const Pagination = ({ items, currentPage, pageSize, onPageChange }: paginationType) => {
    const pagesCount = Math.ceil(items / pageSize);
    if (pagesCount === 1) return null;

    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

    return (
        <div className="w-full mt-[35px]">
            <ul className="w-full flex items-center justify-center">
                {pages.map((page) => (
                    <li key={page} className="mx-[5px] ">
                        <button
                            onClick={() => onPageChange(page)}
                            className={`px-[8px] py-[2px] md:px-3 md:py-1 rounded cursor-pointer hover:bg-[var(--themecolor)] hover:text-black transition-all ease-in-out duration-150 ${
                                page === currentPage ? 'bg-[var(--themecolor)] text-black' : 'bg-[#191c24] text-white'
                            }`}
                        >
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pagination;
