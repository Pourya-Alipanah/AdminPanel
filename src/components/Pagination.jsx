import { Button, HStack, IconButton, Stack } from "@chakra-ui/react";
import _ from "lodash";
import {TiChevronLeft, TiChevronRight} from 'react-icons/ti'
import { useSearchParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Pagination = ({ totalRecords, pageSize}) => {

  const pages = Math.ceil(totalRecords / pageSize);

  const [searchParams , setSearchParams] = useSearchParams()

  const currentPage = Number(searchParams.get('page')) || 1

  const prevPage = () =>{
    if(currentPage > 1){
        setSearchParams({page: currentPage - 1})
    }
  }

  const nextPage = ()=>{
    if(currentPage < pages){
        setSearchParams({page: currentPage + 1})
    }
  }

  return (
    <Stack p={5}>
      <HStack justify={'center'}>
        <IconButton
          borderRadius={'md'}
          variant={'outline'}
          aria-label="previous"
          icon={<TiChevronRight/>}
          colorScheme={'messenger'}
          size={{md:'md',sm:'sm',base:'xs'}}
          style={{padding: 0}}
          onClick={prevPage}
          isDisabled={(currentPage === 1)}
        />
        {_.times(pages , (index)=>(
            <Button
            key={`page${index + 1}`}
            borderRadius={'md'}
            size={{md:'md',sm:'sm',base:'xs'}}
            variant={currentPage === index+1 ? 'solid' : 'outline'}
            colorScheme={'messenger'}
            onClick={()=> setSearchParams({page: index + 1})}
          >
            {index + 1}
          </Button>
        ))}
        <IconButton
          borderRadius={'md'}
          aria-label="next"
          icon={<TiChevronLeft/>}
          variant={'outline'}
          colorScheme={'messenger'}
          size={{md:'md',sm:'sm',base:'xs'}}
          style={{padding: 0}}
          onClick={nextPage}
          isDisabled={(currentPage === pages)}
        />
      </HStack>
    </Stack>
  );
};

export default Pagination;
